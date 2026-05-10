export interface Guest {
  name: string;
  table: number;
}

export const SEATING_DATA: Record<number, string[]> = {
  1: ["Maurice", "Kathy Shearer", "David Shearer", "Jessica Shearer", "Cameron Shearer", "Tristan Shearer"],
  2: ["Ayesha Mulla", "Saif Ahmed", "Arham Ahmed", "Islah Khan", "Sadaf Ghani", "Nida Farooqui", "Amira Ahmed", "Amira relative", "Amira relative kid"],
  3: ["Tareq Aldajani", "Rand Al Ramahi", "Yousef Aldajani", "Muhammad Aldajani", "Salam Al Nahhas", "Yasser", "Talia", "Lana", "Asmaa Al Nahhas"],
  4: ["Sevilay Dincer", "Filsan Abokor", "Haniya", "Adara", "Putri Leksono", "Dewi Leksono", "Azka Tauseef", "Nurin Izzati"],
  5: ["Sulman Ali", "Syed Sameed", "Safwan Twakkal", "Muhammad Konain", "Abhinav Tota", "Christopher Fernando", "Ayzar", "Abdul Rahman Silmy", "Sajeed"],
  6: ["Shayan Iqbal", "Ali Mirza", "Idris Mirza", "Nauman Iqbal", "Rabail Waseem", "Mustafa Nauman", "Maryam Nauman", "Mahmood Mirza", "Nargis Mirza", "Shameem Jahangeer"],
  7: ["Farhan Iqbal", "Aleisha Nazir", "Yahyah Farhan", "Sumayyah Farhan", "Safa Farhan", "Maleeka Aamer", "Waqas Iqbal", "Robina Iqbal", "Mohammad Iqbal"],
  8: ["Mr Waseem", "Mrs Waseem", "Mr Sohaib", "Mrs Sohaib", "Mr and Mrs Sohaib Baby", "Mr and Mrs Zaid Baby", "Mrs Zaid", "Mr Zaid", "Rohail", "Wardah"],
  9: ["Mr Safeer", "Nazma Safeer", "Subhan Safeer", "Ayan Safeer", "safeer kid 3", "safeer kid 4", "Nazreen", "Nazir", "Iqra"],
  10: ["Rahma Hamza", "Rabab Kenawy", "Janna Hamza", "Sara Alellam", "Eslam", "Zain", "Mrs Ghanim", "Mr Ghanim", "Mr and Mrs Ghanim Baby"],
};

export const GUEST_LIST: Guest[] = Object.entries(SEATING_DATA).flatMap(([table, names]) =>
  names.map((name) => ({ name, table: parseInt(table) }))
).sort((a, b) => a.name.localeCompare(b.name));
