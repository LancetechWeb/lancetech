/**
 * builds File type Map from an Array of Files
 * @param files 
 * @param prevFileMap 
 * @param multiple 
 * @returns, Record<string, File> 
 */
export const buildFileMapFromFileArray = (files:File[], prevFileMap:Record<string, File>, multiple?:boolean) =>{
  const fileMap:Record<string, File> = {}

  files.forEach(file => fileMap[file.name]=file)  

  // If multiple is false, replace files; otherwise, append them
  return  multiple ?  {...prevFileMap, ...fileMap} : fileMap
}


/**
 * converts bytes to Bytes, KB and MB
 * @param sizeInBytes number
 * @returns string
 */
export const formatFileSize = (sizeInBytes:number) => {
  if (sizeInBytes < 1024) {
      return `${sizeInBytes} Bytes`;
  } else if (sizeInBytes < 1024 * 1024) {
      return `${(sizeInBytes / 1024).toFixed(2)} KB`;
  } else {
      return `${(sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
  }
};
