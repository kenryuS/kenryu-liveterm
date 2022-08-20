// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'readme' - my github readme.`;
};

/*
export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
`;
};
*/

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://www.twitter.com/${config.social.twitter}/`);

  return 'Opening twitter';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
    if (args[0] === `-l`) {
        return `
total 1
drwxrwxr-x 1 kenryuS kenryuS 4096 August 19 21:43 secrets
		`;
	} else if ((args[0] === `secrets`) || (args[0] === `secrets/`)) {
    return `
Here are my secrets:

I HATE to use most of the Propriety Softwares.
I'm using Linux for ALL of the Tasks; web browsing, gaming, and of-course programming.
    `;
    } else if (args[0]){
        return `No Directory named "` + args[0] + `" found`;
    } else {
    return `
secrets/
    `;
  }
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, this command is under-construction.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

  ██     ██ ███████ ██       ██████  ██████  ███    ███ ███████     ████████  ██████                    
  ██     ██ ██      ██      ██      ██    ██ ████  ████ ██             ██    ██    ██                   
  ██  █  ██ █████   ██      ██      ██    ██ ██ ████ ██ █████          ██    ██    ██                   
  ██ ███ ██ ██      ██      ██      ██    ██ ██  ██  ██ ██             ██    ██    ██                   
   ███ ███  ███████ ███████  ██████  ██████  ██      ██ ███████        ██     ██████                    
                                                                                                        
                                                                                                        
  ██   ██ ███████ ███    ██ ██████  ██    ██ ██    ██ ███████       ████████ ███████ ██████  ███    ███ 
  ██  ██  ██      ████   ██ ██   ██  ██  ██  ██    ██ ██               ██    ██      ██   ██ ████  ████ 
  █████   █████   ██ ██  ██ ██████    ████   ██    ██ ███████ █████    ██    █████   ██████  ██ ████ ██ 
  ██  ██  ██      ██  ██ ██ ██   ██    ██    ██    ██      ██          ██    ██      ██   ██ ██  ██  ██ 
  ██   ██ ███████ ██   ████ ██   ██    ██     ██████  ███████          ██    ███████ ██   ██ ██      ██ 
                                                                                                        

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
