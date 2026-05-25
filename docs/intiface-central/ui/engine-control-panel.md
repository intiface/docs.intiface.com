import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Engine Control Panel

The Engine Control Panel is always visible at the top of the app, regardless of which tab is
active. It lets you start and stop the server and shows live status information.

![Intiface Central Desktop Engine Control Panel](screenshots/desktop-engine-control-panel-window-callouts.png)

## Icons

### Control Button

| Icon | Flutter icon | Ligature text | Meaning |
|---|---|---|---|
| <span class="material-icons" aria-hidden="true">play_arrow</span> | `Icons.play_arrow` | `play_arrow` | Start server |
| <span class="material-icons" aria-hidden="true">stop</span> | `Icons.stop` | `stop` | Stop server |
| <span class="material-icons" aria-hidden="true">error</span> | `Icons.error` | `error` | Engine file not found — run Check For Updates |

### Connection Status

| Icon | Flutter icon | Ligature text | Meaning |
|---|---|---|---|
| <span class="material-icons" aria-hidden="true">phone_in_talk</span> | `Icons.phone_in_talk` | `phone_in_talk` | Client connected |
| <span class="material-icons" aria-hidden="true">phone_disabled</span> | `Icons.phone_disabled` | `phone_disabled` | Server running, no client connected |
| <span class="material-icons" aria-hidden="true">bedtime</span> | `Icons.bedtime` | `bedtime` | Server not running, or server started and awaiting connection |
| <span class="material-icons" aria-hidden="true">start</span> | `Icons.start` | `start` | Server starting |
| <span class="material-icons" aria-hidden="true">question_mark</span> | `Icons.question_mark` | `question_mark` | Status unknown |

### Alert Buttons

Alert buttons appear in the top-right area of the control panel when relevant. They are hidden
when no alert is active.

| Icon | Flutter icon | Ligature text | Meaning |
|---|---|---|---|
| <span class="material-icons" aria-hidden="true">warning</span> | `Icons.warning` | `warning` | An error occurred — tap to view the log |
| <span class="material-icons" aria-hidden="true">update</span> | `Icons.update` | `update` | App update available — tap to go to Settings |
