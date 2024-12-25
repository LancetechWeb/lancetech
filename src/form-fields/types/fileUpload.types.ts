// Enum for file types
export enum FileType {
    PDF = '.pdf',
    DOC = '.doc',
    DOCX = '.docx',
    TXT = '.txt',
    RTF = '.rtf',
    ODT = '.odt',
    PPTX = '.pptx',
    PPT = '.ppt',
    JPG = '.jpg',
    JPEG = '.jpeg',
    PNG = '.png',
    TIFF = '.tiff',
  }
  
  // FileType-to-MIME Mapping
  const fileTypeMimeMap: Record<FileType, string> = {
    [FileType.PDF]: 'application/pdf',
    [FileType.DOC]: 'application/msword',
    [FileType.DOCX]: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    [FileType.TXT]: 'text/plain',
    [FileType.RTF]: 'application/rtf',
    [FileType.ODT]: 'application/vnd.oasis.opendocument.text',
    [FileType.PPTX]: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    [FileType.PPT]: 'application/vnd.ms-powerpoint',
    [FileType.JPG]: 'image/jpeg',
    [FileType.JPEG]: 'image/jpeg',
    [FileType.PNG]: 'image/png',
    [FileType.TIFF]: 'image/tiff',
  };
  
  // Dynamic `accept` generator function
  export const generateAcceptObject = (fileTypes: FileType[]): Record<string, string[]> => {
    const accept: Record<string, string[]> = {};
  
    fileTypes.forEach((fileType) => {
      const mimeType = fileTypeMimeMap[fileType];
      if (mimeType) {
        if (!accept[mimeType]) {
          accept[mimeType] = [];
        }
        accept[mimeType].push(fileType);
      }
    });
  
    return accept;
  };
  