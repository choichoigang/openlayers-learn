export default function createEmptyCricle(): HTMLDivElement {
  const marker = document.createElement("div");

  marker.style.width = "24px";
  marker.style.height = "24px";
  marker.style.borderColor = "red";
  marker.style.border = `4px solid rgb(54,141,194)`;
  marker.style.borderRadius = "50%";

  return marker;
}
