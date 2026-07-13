## Formato de report ao final de uma tarefa

Ao concluir qualquer tarefa que envolva múltiplos itens, verificações ou correções, feche a
resposta com um bloco de código (três crases, texto simples, sem NENHUMA sintaxe markdown
dentro — sem **negrito**, sem [links](url), sem `código inline`, sem headers), contendo SÓ o
resultado final de cada item, numerado, em texto puro (sem narração do processo, sem "agora
vou verificar X" nem raciocínio intermediário). O bloco precisa poder ser selecionado e
copiado como texto plano para outra conversa, sem nenhum símbolo de formatação sobrando.

## Hábitos de verificação
- Ao testar uma correção, sempre inclua pelo menos 1 teste NEGATIVO (confirmar que algo que
  NÃO deveria acontecer, de fato não acontece) — não só o caso positivo.
- Ao reportar resultado de teste, inclua números/exemplos concretos, nunca só "funcionou".
- Se uma mudança afeta o comportamento descrito em algum .claude/skills/*.md, atualize a
  skill no MESMO commit — nunca deixe pra depois.
- Screenshot: máximo 2 tentativas por tarefa. Se falhar nas 2, pare, documente a limitação
  como tal, e prossiga com verificação por DOM/estado real — nunca insista além disso.
