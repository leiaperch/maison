// Fabrique d'éléments sans innerHTML.
// el('a', { class: 'x', href: '#', dataset: { cursor: 'VOIR' } }, 'texte', child)

export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null) continue;
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'dataset') Object.assign(node.dataset, v);
    else if (k === 'style') node.style.cssText = v;
    else node.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c == null) continue;
    node.append(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return node;
}

export function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

// Découpe un texte en mots enveloppés (pour les révélations au scroll).
export function splitWords(text, cls = 'w') {
  return text.split(/(\s+)/).map((part) =>
    /^\s+$/.test(part) ? document.createTextNode(' ') : el('span', { class: cls }, el('i', { text: part })),
  );
}
