// add solution here
function theBeatlesPlay(musicians, instruments){
  var musiciansInstruments = new Array(musicians.length);
  for (let i = 0; i < musicians.length; i++){
    musiciansInstruments[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return musiciansInstruments
}
function johnLennonFacts