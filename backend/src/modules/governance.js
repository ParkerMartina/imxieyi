export class Governance {
  constructor(){ this.proposals = []; }
  createProposal(title){ const id = this.proposals.length+1; this.proposals.push({id,title,votes:0}); return id; }
  vote(id){ const p=this.proposals.find(x=>x.id===id); if(!p) throw new Error('not found'); p.votes++; }
}
