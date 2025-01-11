import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const response = {};

  try {
    response.photo = await uploadPhoto();
    response.user = await createUser();
  } catch (error) {
    Object.assign(response, { photo: null, user: null });
  }

  return response;
}
