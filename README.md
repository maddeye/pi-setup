# Shared pi agent setup

My extensions, skills, and a settings template for the [pi](https://github.com/earendil-works/pi) coding agent. Clone this into `~/.pi/agent` and it works after two setup steps.

## Install

1. Clone into the pi agent directory:

   ```sh
   git clone git@github.com:maddeye/pi-setup.git ~/.pi/agent
   ```

   If `~/.pi/agent` already exists, back it up first. This overwrites it.

2. Copy the settings template:

   ```sh
   cp ~/.pi/agent/settings.example.json ~/.pi/agent/settings.json
   ```

   Edit `settings.json` to set your provider and model. The template omits both.

3. Install dependencies:

   ```sh
   cd ~/.pi/agent
   npm install
   ```

   All extensions share one `package.json` at the root, so one install covers them all.

Start pi. It fetches the packages listed in `settings.json` on first run.
