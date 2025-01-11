import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = { photo: null, user: null };

  try {
    result.photo = await uploadPhoto();
    result.user = await createUser();
  } catch {
    // Intentionally left empty to retain null values in case of error
  }

  return result;
}
