// IMPORTANT: Replace this with the SS Interiors WhatsApp number in international format.
 // Example for India: 919876543210 (country code + number, no +, spaces or dashes).
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const category = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
const floatButton = document.getElementById("whatsappFloat");
floatButton.href = whatsappUrl("Hello SS Interiors & Developers. I would like to know more about your interior design services.");

document.getElementById("quoteForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const fields = [
    "New Project Enquiry — SS Interiors & Developers",
    `Name: ${form.get("name")}`,
    `Phone: ${form.get("phone")}`,
    `Email: ${form.get("email") || "Not provided"}`,
    `Project location: ${form.get("location") || "Not provided"}`,
    `Service: ${form.get("service") || "Not selected"}`,
    `Budget: ${form.get("budget") || "Not specified"}`,
    `Project details: ${form.get("details") || "Not provided"}`
  ];
  if (WHATSAPP_NUMBER.includes("X")) {
    document.getElementById("formStatus").textContent =
      "Setup needed: add the real WhatsApp number in script.js before using this enquiry form.";
    return;
  }
  document.getElementById("formStatus").textContent =
    "WhatsApp is opening with your enquiry. Please review the message and press Send in WhatsApp.";
  window.open(whatsappUrl(fields.join("\n")), "_blank", "noopener");
});
