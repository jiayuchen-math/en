// Optional self-marking only. Never hides links, unlocks study or stores a profile.
document.querySelectorAll('[data-path-choice]').forEach(choice=>{
 const update=()=>{const node=choice.closest('.path-node');node.classList.toggle('already-familiar',choice.checked);const text=node.querySelector('[data-path-state]');text.textContent=choice.checked?'Marked familiar — review skipped; all links remain available.':'Optional preparation — choose your own route.'};
 choice.addEventListener('change',update);update();
});
