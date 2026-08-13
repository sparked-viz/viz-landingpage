# What Gets Recorded

Everything captured alongside your voice during a recording.

Every action you take while recording shows up as a colored block on the timeline strip in the recording editor, directly below the audio waveform. The color tells you what kind of action each block is: **green** for Scroll / Zoom / Pan actions, **blue** for Step Plays (the Pointer tool's trail uses this same blue), **pink** for Writing actions, and **gray** for Eraser actions.

![User Actions on the Recording Timeline](/guide-images/useractions-during-editing.webp "Green, blue, pink, and gray blocks marking each captured action by type.")

## Pointing Actions

Two tools trace out where you're pointing without leaving a permanent mark: the Cursor/Pointer tool and the Laser tool. While recording, every position you move through with either tool held down is saved as a fading trail, so viewers see exactly what you gestured at and when.

## Writing Actions

Strokes made with the Pencil tool are captured point by point, along with their color and width, as you draw. The exported video redraws each stroke exactly as you made it, not just a snapshot of the finished ink.

## Eraser Actions

Passes made with the Eraser tool are captured the same way as pencil strokes — as a path over time. Whatever ink those passes clear is removed again in the same order during playback.

## Scroll / Zoom / Pan Actions

The canvas position and zoom level are sampled continuously while you record. Scrolling, panning with the middle mouse button, and zooming with Ctrl/Cmd + scroll are all reproduced in the exported video, moving the viewport exactly as it moved while you were recording.

## Step Plays

Playing the current step, or jumping to the next or previous step, is captured as its own event — including which step you moved from and to, how far into it you were, the direction, and the speed. The export replays the same step navigation you performed, not just the end result.

## Voice

If you enabled a microphone before starting, your voice is captured continuously in the background for the whole recording, synced to the same clock as every action above. With no microphone enabled, the recording has no audio track.
