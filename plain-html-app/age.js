function calculateAge() {
  const birth = document.getElementById('ageBirth').value;
  if (!birth) return;
  const today = new Date();
  const birthDate = new Date(birth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  document.getElementById('ageResult').innerText = `Yaşınız: ${age}`;
} 