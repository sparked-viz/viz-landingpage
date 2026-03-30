import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { trackCTAClick } from '../analytics';

// ── Types ────────────────────────────────────────────────────────

interface FormData {
    jeePrograms: string[];
    activeStudents: string;
    avgBatchSize: string;
    lectureDelivery: string;
    teachingTools: string[];
    createsVideos: string;
    videoHosting: string;
    timeConsuming: string[];
    openToTool: string;
    name: string;
    phone: string;
    email: string;
}

const INITIAL: FormData = {
    jeePrograms: [],
    activeStudents: '',
    avgBatchSize: '',
    lectureDelivery: '',
    teachingTools: [],
    createsVideos: '',
    videoHosting: '',
    timeConsuming: [],
    openToTool: '',
    name: '',
    phone: '',
    email: '',
};

const STEP_TITLES = [
    'About Your Institute',
    'Teaching Setup',
    'Workflow & Interest',
    'Get in Touch',
];

const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const canProceed = (step: number, data: FormData): boolean => {
    switch (step) {
        case 0: return data.jeePrograms.length > 0 && !!data.activeStudents && !!data.lectureDelivery;
        case 1: return data.teachingTools.length > 0 && !!data.createsVideos;
        case 2: return data.timeConsuming.length > 0 && !!data.openToTool;
        case 3: return !!data.name.trim() && !!data.phone.trim() && isValidEmail(data.email);
        default: return false;
    }
};

// ── Primitive components (defined outside to keep stable identity) ─

interface CheckOptProps {
    checked: boolean;
    label: string;
    onToggle: () => void;
}
const CheckOpt: React.FC<CheckOptProps> = ({ checked, label, onToggle }) => (
    <button
        type="button"
        onClick={onToggle}
        className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border transition-all duration-150 ${
            checked
                ? 'border-brand bg-brand-subtle text-ink'
                : 'border-line text-ink-secondary hover:border-line-strong hover:bg-bg-secondary'
        }`}
    >
        <span className={`w-5 h-5 flex-shrink-0 rounded flex items-center justify-center border-2 transition-all ${
            checked ? 'bg-brand border-brand' : 'border-line-strong'
        }`}>
            {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </span>
        <span className="text-sm font-medium leading-snug">{label}</span>
    </button>
);

interface RadioOptProps {
    selected: boolean;
    label: string;
    onSelect: () => void;
}
const RadioOpt: React.FC<RadioOptProps> = ({ selected, label, onSelect }) => (
    <button
        type="button"
        onClick={onSelect}
        className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border transition-all duration-150 ${
            selected
                ? 'border-brand bg-brand-subtle text-ink'
                : 'border-line text-ink-secondary hover:border-line-strong hover:bg-bg-secondary'
        }`}
    >
        <span className={`w-5 h-5 flex-shrink-0 rounded-full flex items-center justify-center border-2 transition-all ${
            selected ? 'border-brand' : 'border-line-strong'
        }`}>
            {selected && <span className="w-2.5 h-2.5 rounded-full bg-brand" />}
        </span>
        <span className="text-sm font-medium leading-snug">{label}</span>
    </button>
);

interface TextInputProps {
    type?: string;
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
    onBlur?: () => void;
    hasError?: boolean;
}
const TextInput: React.FC<TextInputProps> = ({ type = 'text', placeholder, value, onChange, onBlur, hasError }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        onBlur={onBlur}
        className={`w-full px-4 py-3 rounded-xl border focus:outline-none text-sm text-ink placeholder:text-ink-tertiary bg-white transition-colors ${
            hasError
                ? 'border-red-400 focus:border-red-500'
                : 'border-line focus:border-brand'
        }`}
    />
);

// ── Main component ───────────────────────────────────────────────

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export const EarlyAccessModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState<FormData>(INITIAL);
    const [emailTouched, setEmailTouched] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const direction = useRef(1);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setStep(0);
            setSubmitted(false);
            setSubmitting(false);
            setData(INITIAL);
            setEmailTouched(false);
            direction.current = 1;
        }, 300);
    };

    const goNext = () => {
        direction.current = 1;
        setStep(s => s + 1);
        scrollRef.current?.scrollTo({ top: 0 });
    };

    const goBack = () => {
        direction.current = -1;
        setStep(s => s - 1);
        scrollRef.current?.scrollTo({ top: 0 });
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_TABLE_NAME}`;
            const body = {
                fields: {
                    'Name':             data.name,
                    'Email':            data.email,
                    'Phone':            data.phone,
                    'JEE Programs':     data.jeePrograms.join(', '),
                    'Active Students':  data.activeStudents,
                    'Avg Batch Size':   data.avgBatchSize,
                    'Lecture Delivery': data.lectureDelivery,
                    'Teaching Tools':   data.teachingTools.join(', '),
                    'Creates Videos':   data.createsVideos,
                    'Video Hosting':    data.videoHosting,
                    'Time Consuming':   data.timeConsuming.join(', '),
                    'Open To Tool':     data.openToTool,
                },
            };

            console.log('Submitting to:', url);
            console.log('Payload:', body);

            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_PAT}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const json = await res.json();

            if (!res.ok) {
                console.error('Airtable error response:', json);
            } else {
                console.log('Airtable success:', json);
                trackCTAClick('Early Access Form Submitted');
            }
        } catch (err) {
            console.error('Airtable fetch failed:', err);
        } finally {
            setSubmitting(false);
            setSubmitted(true);
        }
    };

    const toggleCheck = (field: 'jeePrograms' | 'teachingTools' | 'timeConsuming', value: string) => {
        setData(prev => {
            const arr = prev[field];
            return { ...prev, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] };
        });
    };

    const setRadio = (field: keyof FormData, value: string) => {
        setData(prev => ({ ...prev, [field]: value }));
    };

    // ── Step renderers ───────────────────────────────────────────

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <div className="space-y-7">
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-3">
                                1. Which JEE programs do you offer? <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {['JEE Main', 'JEE Main + Advanced', 'Foundation (Class 8–10)', 'Droppers Batch', 'Crash Course', 'Online-only batch', 'Hybrid batch'].map(opt => (
                                    <CheckOpt key={opt} label={opt} checked={data.jeePrograms.includes(opt)} onToggle={() => toggleCheck('jeePrograms', opt)} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-3">
                                2. How many active JEE students do you currently have? <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {['<100', '100–300', '300–800', '800–2000', '2000+'].map(opt => (
                                    <RadioOpt key={opt} label={opt} selected={data.activeStudents === opt} onSelect={() => setRadio('activeStudents', opt)} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">3. Average batch size?</label>
                            <TextInput
                                type="number"
                                placeholder="e.g. 40"
                                value={data.avgBatchSize}
                                onChange={v => setData(prev => ({ ...prev, avgBatchSize: v }))}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-3">
                                4. How do you currently deliver lectures? <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {['Offline classroom only', 'Live online (Zoom/Meet)', 'Hybrid', 'Pre-Recorded model', 'LMS-based structured delivery'].map(opt => (
                                    <RadioOpt key={opt} label={opt} selected={data.lectureDelivery === opt} onSelect={() => setRadio('lectureDelivery', opt)} />
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 1:
                return (
                    <div className="space-y-7">
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-3">
                                5. What tools do you use for solving problems during teaching? <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {['iPad + Pencil', 'Wacom / Pen Tablet', 'Digital Whiteboard Software', 'Traditional whiteboard + camera', 'PPT-based slides', 'Other'].map(opt => (
                                    <CheckOpt key={opt} label={opt} checked={data.teachingTools.includes(opt)} onToggle={() => toggleCheck('teachingTools', opt)} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-3">
                                6. Do you create recorded problem-solving videos? <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {['Yes – Regularly', 'Occasionally', 'No'].map(opt => (
                                    <RadioOpt key={opt} label={opt} selected={data.createsVideos === opt} onSelect={() => setRadio('createsVideos', opt)} />
                                ))}
                            </div>
                        </div>
                        <AnimatePresence>
                            {data.createsVideos && data.createsVideos !== 'No' && (
                                <motion.div
                                    key="hosting"
                                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginTop: 28 }}
                                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <label className="block text-sm font-semibold text-ink mb-2">7. Where do you host them?</label>
                                    <TextInput
                                        placeholder="e.g. YouTube, LMS, Telegram..."
                                        value={data.videoHosting}
                                        onChange={v => setData(prev => ({ ...prev, videoHosting: v }))}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-7">
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-3">
                                8. What is the most time-consuming part of your current workflow? <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {['Explaining & writing solutions', 'Creating visuals/diagrams', 'Recording', 'Editing', 'Uploading / LMS management', 'Student doubt handling'].map(opt => (
                                    <CheckOpt key={opt} label={opt} checked={data.timeConsuming.includes(opt)} onToggle={() => toggleCheck('timeConsuming', opt)} />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-3">
                                9. Would you be open to trying a tool designed for structured visual problem-solving for JEE? <span className="text-brand">*</span>
                            </label>
                            <div className="space-y-2">
                                {["Yes – I'd like early access", 'Yes – Show me a demo first', 'Maybe', 'Not interested'].map(opt => (
                                    <RadioOpt key={opt} label={opt} selected={data.openToTool === opt} onSelect={() => setRadio('openToTool', opt)} />
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 3: {
                const showEmailError = emailTouched && data.email.length > 0 && !isValidEmail(data.email);
                return (
                    <div className="space-y-5">
                        <p className="text-sm text-ink-secondary">We'll use this to get in touch and set up your early access.</p>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">
                                Name <span className="text-brand">*</span>
                            </label>
                            <TextInput
                                placeholder="Your full name"
                                value={data.name}
                                onChange={v => setData(prev => ({ ...prev, name: v }))}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">
                                Phone Number <span className="text-brand">*</span>
                            </label>
                            <TextInput
                                type="tel"
                                placeholder="+91 98765 43210"
                                value={data.phone}
                                onChange={v => setData(prev => ({ ...prev, phone: v }))}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-ink mb-2">
                                Email <span className="text-brand">*</span>
                            </label>
                            <TextInput
                                type="email"
                                placeholder="you@institute.com"
                                value={data.email}
                                hasError={showEmailError}
                                onChange={v => setData(prev => ({ ...prev, email: v }))}
                                onBlur={() => setEmailTouched(true)}
                            />
                            <AnimatePresence>
                                {showEmailError && (
                                    <motion.p
                                        key="email-err"
                                        initial={{ opacity: 0, y: -4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -4 }}
                                        transition={{ duration: 0.15 }}
                                        className="mt-1.5 text-xs text-red-500"
                                    >
                                        Please enter a valid email address.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                );
            }

            default:
                return null;
        }
    };

    // ── Render ───────────────────────────────────────────────────

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                        onClick={handleClose}
                    />

                    {/* Sheet / Modal */}
                    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-0 sm:px-4 pointer-events-none">
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.25, ease: [0, 0, 0.2, 1] }}
                            className="pointer-events-auto w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-xl flex flex-col"
                            style={{ maxHeight: '92vh' }}
                        >
                            {!submitted ? (
                                <>
                                    {/* Handle bar (mobile only) */}
                                    <div className="flex justify-center pt-3 pb-1 sm:hidden flex-shrink-0">
                                        <div className="w-10 h-1 rounded-full bg-line-strong" />
                                    </div>

                                    {/* Header */}
                                    <div className="flex items-start justify-between px-6 pt-4 sm:pt-6 pb-3 flex-shrink-0">
                                        <div>
                                            <p className="overline-brand text-xs mb-1">Step {step + 1} of {STEP_TITLES.length}</p>
                                            <h2 className="text-lg font-bold text-ink">{STEP_TITLES[step]}</h2>
                                        </div>
                                        <button
                                            onClick={handleClose}
                                            className="text-ink-tertiary hover:text-ink transition-colors p-1 -mr-1 mt-0.5"
                                            aria-label="Close"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="px-6 pb-4 flex-shrink-0">
                                        <div className="h-1.5 w-full bg-bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-brand rounded-full"
                                                animate={{ width: `${((step + 1) / STEP_TITLES.length) * 100}%` }}
                                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Scrollable form body */}
                                    <div ref={scrollRef} className="overflow-y-auto flex-1 px-6 pb-4">
                                        <AnimatePresence mode="wait" initial={false}>
                                            <motion.div
                                                key={step}
                                                initial={{ opacity: 0, x: direction.current * 28 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: direction.current * -28 }}
                                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                            >
                                                {renderStep()}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center gap-3 px-6 py-4 border-t border-line flex-shrink-0">
                                        {step > 0 && (
                                            <button
                                                onClick={goBack}
                                                className="btn btn-outline text-sm px-5 py-2.5 flex items-center gap-2"
                                            >
                                                <ArrowLeft className="w-4 h-4" />
                                                Back
                                            </button>
                                        )}
                                        <button
                                            onClick={step < STEP_TITLES.length - 1 ? goNext : handleSubmit}
                                            disabled={!canProceed(step, data) || submitting}
                                            onMouseEnter={() => { if (step === 3) setEmailTouched(true); }}
                                            className="btn btn-brand text-sm px-6 py-2.5 ml-auto flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                                            style={{ transform: (canProceed(step, data) && !submitting) ? undefined : 'none' }}
                                        >
                                            {step < STEP_TITLES.length - 1 ? (
                                                <>Next <ArrowRight className="w-4 h-4" /></>
                                            ) : submitting ? (
                                                <>Submitting…</>
                                            ) : (
                                                <>Submit <ArrowRight className="w-4 h-4" /></>
                                            )}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                /* Success screen */
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col items-center justify-center text-center px-8 py-16 gap-5"
                                >
                                    <div className="w-16 h-16 rounded-full bg-brand-subtle flex items-center justify-center">
                                        <Check className="w-8 h-8 text-brand" strokeWidth={2.5} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-bold text-ink">You're on the list!</h2>
                                        <p className="text-sm text-ink-secondary max-w-xs">
                                            Thanks {data.name.split(' ')[0]}! We'll be in touch soon with your early access details.
                                        </p>
                                    </div>
                                    <button onClick={handleClose} className="btn btn-brand text-sm px-8 py-2.5 mt-2">
                                        Done
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
