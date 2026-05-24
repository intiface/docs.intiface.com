import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Devices Panel

<Tabs>
  <TabItem value="desktop" label="Desktop" default>
    ![Intiface Central Desktop App Modes Tab](screenshots/desktop-devices-window-callouts.png)
  </TabItem>
  <TabItem value="mobile" label="Mobile">
    ![Intiface Central Mobile App Modes Tab](screenshots/mobile-devices-window-callouts.png)
  </TabItem>
</Tabs>

## Icons

| Icon | Flutter icon | Ligature text | Meaning |
|---|---|---|---|
| <span class="material-icons" aria-hidden="true">bluetooth_connected</span> | `Icons.bluetooth_connected` | `bluetooth_connected` | Device is connected |
| <span class="material-icons" aria-hidden="true">bluetooth_disabled</span> | `Icons.bluetooth_disabled` | `bluetooth_disabled` | Device is known but not connected |
| <span class="material-icons" aria-hidden="true">vibration</span> | `Icons.vibration` | `vibration` | Vibrate output feature |
| <span class="material-icons" aria-hidden="true">rotate_right</span> | `Icons.rotate_right` | `rotate_right` | Rotate output feature |
| <span class="material-icons" aria-hidden="true">swap_vert</span> | `Icons.swap_vert` | `swap_vert` | Oscillate output feature |
| <span class="material-icons" aria-hidden="true">compress</span> | `Icons.compress` | `compress` | Constrict output feature |
| <span class="material-icons" aria-hidden="true">thermostat</span> | `Icons.thermostat` | `thermostat` | Temperature output feature |
| <span class="material-icons" aria-hidden="true">light</span> | `Icons.light` | `light` | LED output feature |
| <span class="material-icons" aria-hidden="true">water_drop</span> | `Icons.water_drop` | `water_drop` | Spray output feature |
| <span class="material-icons" aria-hidden="true">straighten</span> | `Icons.straighten` | `straighten` | Position output feature |
| <span class="material-icons" aria-hidden="true">timer</span> | `Icons.timer` | `timer` | Position-with-duration / stroker output feature |
| <span class="material-icons" aria-hidden="true">sensors</span> | `Icons.sensors` | `sensors` | Sensor/input feature |
| <span class="material-icons" aria-hidden="true">chevron_right</span> | `Icons.chevron_right` | `chevron_right` | Open device details |

Feature icons are de-duplicated per card. For example, a double vibrator still
shows one `vibration` icon, not two.
