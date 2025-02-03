import { MiscImagesIds } from "../../../core/types/core.types";
import { getVariable } from "../../../utils/misc/env.misc";
import { TeamListType } from "../../types/home.types";

export const teamList:TeamListType[] = [
  {
    memberName: 'Omon Imaralu',
    memberTitle: 'Product Manager',
    memberImgUrl: `${getVariable("BASE_URL")}/images/get-image/${MiscImagesIds.OMON_IMARALU}`,
    imageId: MiscImagesIds.OMON_IMARALU,
  },
  {
    memberName: 'Osas Ferguson',
    memberTitle: 'Software Engineer',
    memberImgUrl: `${getVariable("BASE_URL")}/images/get-image/${MiscImagesIds.OSAS_FERGUSON}`,
    imageId: MiscImagesIds.OSAS_FERGUSON,
  },
  {
    memberName: 'Daniel Osemeke',
    memberTitle: 'UX Designer',
    memberImgUrl: `${getVariable("BASE_URL")}/images/get-image/${MiscImagesIds.DANIEL_OSEMEKE}`,
    imageId: MiscImagesIds.DANIEL_OSEMEKE,
  },
  {
    memberName: 'Akachukwu Ajulibe',
    memberTitle: 'Software Engineer',
    memberImgUrl: `${getVariable("BASE_URL")}/images/get-image/${MiscImagesIds.AKACHUKWU_AJULIBE}`,
    imageId: MiscImagesIds.AKACHUKWU_AJULIBE,
  },
];
