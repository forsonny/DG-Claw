# memray: Usage and Configuration

Memray is executed primarily via the command-line interface, providing an end-to-end suite for capturing and analyzing Python RAM bloat.

## CLI Execution
To track the peak memory allocated during a script's execution:
```bash
python3 -m memray run my_script.py
```
This generates an aggregated `.bin` snapshot file.

## Report Generation
You can invoke the reporter utilities directly against the `.bin` output:
```bash
memray flamegraph memray-my_script.1234.bin
# OR
memray tree memray-my_script.1234.bin
```
The flamegraph command outputs an interactive HTML template (e.g. `memray-flamegraph-mandelbrot.html`) containing zooming physics powered by D3/Plotly, demonstrating visually which functions monopolized RAM.

## Live Mode
Memray features an interactive Terminal User Interface (TUI) powered by Textual that displays real-time memory climbing:
```bash
memray run --live my_script.py
```

## Programmatic Integration
Developers can manually wrap context blocks in tests or applications:
```python
import memray
with memray.Tracker("destination.bin"):
    heavy_compute_function()
```
