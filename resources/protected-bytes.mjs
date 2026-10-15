// Four existing text sources are CRLF in the Windows checkout and LF in Git.
// Their LF-normalized Git blob IDs were independently compared with the
// pre-redesign d1af257459ac7d92362d7d214d47fed14f70744d tree. No note is rewritten.
// Keep the original CRLF SHA-256 baselines: normalize only these known paths
// while hashing. All other text, PDFs and images are hashed as their raw bytes.
export const windowsSourceBlobs = Object.freeze({
 'notes/mathematical-notes/calculus/Lecture1.md':'841b407f5738b76ea25596631e104e60ce0d70bb',
 'notes/mathematical-notes/calculus/Lecture1.tex':'924c03bed87c44df585fb1d145569744ee4f3f70',
 'notes/mathematical-notes/calculus/MAweek1.md':'841b407f5738b76ea25596631e104e60ce0d70bb',
 'notes/mathematical-notes/calculus/MAweek1.tex':'edf7f3daa890b4c4d3902a7f6360546ee7fd4288',
});
export function protectedBytes(bytes,file){
 if(!Object.hasOwn(windowsSourceBlobs,file))return bytes;
 return Buffer.from(bytes.toString('utf8').replaceAll('\r\n','\n').replaceAll('\n','\r\n'));
}
