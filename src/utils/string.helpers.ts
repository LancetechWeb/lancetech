import isURL, { IsURLOptions } from 'validator/lib/isURL';


/**
 * Checks if a url has the http or https protocol in it
 * @param url
 * @returns boolean
 */
export const urlHasProtocol = (url: string): boolean => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return true;
    }
  
    return false;
};
  
/**
 * checks that a url is valid
 * @param url 
 * @returns boolean
 */
export const validateUrl = (url: string): string|null => {
    let updatedURL = url

    const options:IsURLOptions = {
        require_protocol: true, // Ensure protocols like http/https
        require_valid_protocol: true, // Validate supported protocols
        allow_underscores: false, // Disallow underscores in the domain
    };

    // check if it has protocol
    if(!urlHasProtocol(url)) updatedURL = `https://${url}`

    if(isURL(updatedURL, options)) return updatedURL;

    return null
  };