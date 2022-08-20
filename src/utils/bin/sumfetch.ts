import config from '../../../config.json';

//  <u><a href="${config.resume_url}" target="_blank">resume</a></u>

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'kenryuS') {
    return `                                                  
             @@@@@@@@@@@@@                   sumfetch: summary display
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@      爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@        @@@                        @@     -----------
@@                                   @@      CONTACT
@@             .@@@@@@@@@@.          @@      <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u> 
 @@           @@          @@        @@       <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  @@           @@        @@        @@       🐦 <u><a href="https://twitter.com/${config.social.twitter}" target="_blank">twitter.com/${config.social.twitter}</a></u>
   @@             @@@@@@          @@        -----------
     @@@                        @@@         
        @@@                  @@@ @@
         @|  @@@@@@@@@@@@@@@@   @@
         @|                      @@

`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  sumfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓          爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       -----------
▐▓                                 ▐▓        CONTACT 
▐▓    > K E N R Y U S - T E R M    ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓                                 ▐▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓       🐦 <u><a href="https://twitter.com/${config.social.twitter}" target="_blank">twitter.com/${config.social.twitter}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓          -----------
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
  }
};

export default sumfetch;
