interface MajorCredits {
  credits: number;
  __brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  __brand: "MinorCredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits",
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits",
  };
}

const math: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const physics: MajorCredits = { credits: 4, __brand: "MajorCredits" };
const totalMajor = sumMajorCredits(math, physics);
console.log("Total Major Credits:", totalMajor); // { credits: 7, __brand: 'MajorCredits' }

const music: MinorCredits = { credits: 2, __brand: "MinorCredits" };
const art: MinorCredits = { credits: 1, __brand: "MinorCredits" };
const totalMinor = sumMinorCredits(music, art);
console.log("Total Minor Credits:", totalMinor); // { credits: 3, __brand: 'MinorCredits' }
