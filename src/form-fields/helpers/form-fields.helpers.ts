
export const buildFileMapFromFileArray = (files:File[], prevFileMap:Record<string, File>, multiple?:boolean) =>{
  const fileMap:Record<string, File> = {}

  files.forEach(file => fileMap[file.name]=file)  

  // If multiple is false, replace files; otherwise, append them
  return  multiple ?  {...prevFileMap, ...fileMap} : fileMap
}