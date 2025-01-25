interface PrimaryCredits {
  points: number;
  institution?: string;
}

interface SecondaryCredits {
  points: number;
  institution: string;
}

export const calculatePrimaryCredits = (course1: PrimaryCredits, course2: PrimaryCredits): number => {
  return course1.points + course2.points;
}

export const calculateSecondaryCredits = (course1: SecondaryCredits, course2: SecondaryCredits): number => {
  return course1.points + course2.points;
}
