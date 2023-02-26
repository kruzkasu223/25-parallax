import "./style.css"

const textMain = document.querySelector("section.one .text_main") as HTMLElement
const textStroke = document.querySelector(
  "section.one .text_stroke"
) as HTMLElement

document.addEventListener("scroll", () => {
  textMain.style.left = Math.max(100 - 0.05 * window.scrollY, -100) + "%"
  textStroke.style.left = Math.max(100 - 0.05 * window.scrollY, -100) + "%"
})
