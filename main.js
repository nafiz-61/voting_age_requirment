let userInput = prompt("Enter Your age");
let age = +userInput;

if (age >= 0 && age <= 17) {
  alert("❌ Underage: Not allowed to vote");
} else if (age >= 18 && age <= 75) {
  alert("✅ Eligible: Allowed to vote");
} else if (age >= 76 && age <= 100) {
  alert("⚠️ Too old: Voting age expired");
} else {
  alert("🔴 Invalid input handling");
}
