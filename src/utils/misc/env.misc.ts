/**
 * checks the current working environment
 * @returns node environment, string
 */
export const currentEnvironment: "development" | "production" | "test" = process.env.NODE_ENV ?? "development";
// export const currentEnvironment: "development" | "production" | "test" =
//   (process.env.NODE_ENV as "development" | "production" | "test") ?? "development";

export const isProduction = () => process.env.NODE_ENV === "production";
export const isDevelopment = () => process.env.NODE_ENV === "development";
export const isTest = () => process.env.NODE_ENV === "test";

export const getVariable = (key:string) =>{
    let newKey:string = ''

    switch(currentEnvironment){
        case "production":
            newKey = `REACT_APP_${key}_PROD`
            break;
        case "test":
            newKey = `REACT_APP_${key}_TEST`
            break;
        case "development":
        default:
            newKey = `REACT_APP_${key}_DEV`
            break;
    }

    const value = process.env[newKey];

    if (!value) {
      throw new Error(`Environment variable ${key} is missing`);
    }

    return value;
}


