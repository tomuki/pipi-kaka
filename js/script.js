const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const targetId = link.dataset.section;

    // nav
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // sections
    sections.forEach(section => {
      section.classList.remove("active");
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  });
});
// =========================
// Concepts logic
// =========================

(() => {
  const buttons = document.querySelectorAll(".concept-btn");
  const title = document.getElementById("conceptTitle");
  const text = document.getElementById("conceptText");
  const meta = document.getElementById("conceptMeta");

  if (!buttons.length || !title || !text || !meta) return;

  const concepts = {
    anti: {
      title: "Anti-fashion",
      text:
        "Refusing “pretty” as a default. The garment is allowed to be difficult, awkward, or unresolved.",
      meta:
        "Examples: Body Meets Dress (1997) · Black tailoring · Objects, not outfits"
    },

    form: {
      title: "Form over body",
      text:
        "The silhouette is not a service for the body. The body adapts to the form, not the opposite.",
      meta:
        "Examples: Sculptural volumes · Armor-like jackets · Ignoring waist and hips"
    },

    asym: {
      title: "Asymmetry",
      text:
        "Balance without symmetry. Tension is designed, not corrected.",
      meta:
        "Examples: Off-center closures · Uneven hems · One-side weight"
    },

    absence: {
      title: "Absence as design",
      text:
        "What is removed becomes structure. The missing part is intentional.",
      meta:
        "Examples: Gaps in silhouette · Cut-outs · Unfinished edges"
    },

    refusal: {
      title: "Beauty through refusal",
      text:
        "Beauty emerges when the piece refuses to flatter or please.",
      meta:
        "Examples: Wrong proportions · Anti-sexy shapes · Discomfort as value"
    },

    silence: {
      title: "Silence as material",
      text:
        "Less explanation, more presence. Meaning appears through restraint.",
      meta:
        "Examples: Monochrome fields · Repetition · Minimal intervention"
    }
  };

  function setConcept(key) {
    const c = concepts[key];
    if (!c) return;

    title.textContent = c.title;
    text.textContent = c.text;
    meta.textContent = c.meta;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      setConcept(btn.dataset.concept);
    });
  });
})();