// Camada de dados. Sem credenciais Firebase => MODO DEMONSTRATIVO (localStorage, só neste aparelho).
// Com credenciais => troque as funções abaixo pelo Firestore (doc: appConfig/public).
export const firebaseConfig = null; // cole aqui o objeto do console Firebase
export const DEMO = !firebaseConfig;
export const padrao = {
  nome: "MEGA RASPADINHA", subtitulo: "Experiência demonstrativa", boasVindas: "Raspe e descubra!",
  titulo: "Sem dinheiro real", corPrimaria: "#f5c542", corFundo: "#14102b", botao: "RASPAR DE NOVO",
  banners: ["", "", ""], suporteUrl: "", versao: 1
};
export async function lerConfig() {
  const s = localStorage.getItem("mr_cfg");
  return { ...padrao, ...(s ? JSON.parse(s) : {}) };
}
export async function salvarConfig(c) {
  c.versao = (c.versao || 1) + 1;
  localStorage.setItem("mr_cfg", JSON.stringify(c));
  window.dispatchEvent(new Event("mr_cfg"));
  return c;
}
export const limpa = (t) => String(t ?? "").replace(/[<>]/g, "").slice(0, 120);
export const urlSegura = (u) => /^https:\/\//.test(u) ? u : "";
// Sorteio demonstrativo. Em produção isto roda no servidor (Cloud Run) e é gravado em gameResults.
export function jogadaDemo() {
  const a = new Uint32Array(1); crypto.getRandomValues(a);
  return { id: crypto.randomUUID(), ganhou: a[0] % 4 === 0, premio: "Prêmio demonstrativo" };
}
