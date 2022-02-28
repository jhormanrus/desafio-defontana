// Gist https://gist.github.com/jhormanrus/64b5a8f12fbf3c99ec80c6e2f1b7edb9

export default function ObjArrToTree(arr: any[], key: string) {
  let { res } = arr.reduce((prev, curr) => {
      if (prev.parentMap[curr[key]]){
          (prev.parentMap[curr[key]].children = prev.parentMap[curr[key]].children || []).push(curr)
      } else {
          prev.res.push(curr);
      }
      prev.parentMap[curr.ID] = curr;
      return prev;
  }, { parentMap: {}, res: [] })
  return res
}