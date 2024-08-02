const ongaq = new Ongaq({
  // API Connections are only allowed from specific IP or domains.
  api_key: 'bddd49d2e07444a689b4decca2ab8613',
  volume: 100,
  bpm: 72,
  onReady: () => {
    const button = document.getElementById('button')
    button.className = 'button start'
    button.onclick = () => {
      if (ongaq.params.isPlaying) {
        ongaq.pause()
        button.className = 'button start'
      } else {
        ongaq.start()
        button.className = 'button pause'
      }
    }
  }
})

const my_piano = new Part({
  sound: 'my_piano',
  measure: 4,
  beatsInMeasure: 32,
})

class SetMusic {
  constructor({ chord, octave, length, measure, beat }) {
    this.chord = chord
    this.octave = octave
    this.length = length
    this.measure = measure
    this.beat = beat

    return this.set()
  }

  set() {
    return new Filter({
      key: new Chord(this.chord, { octave: this.octave }),
      length: this.length,
      active: (b, m) => b === this.beat && m === this.measure
    })
  }
}


/************************************
 *          The Beatles
 *          ♪ Let It Be
 ************************************/

// ----------------------------
// 1st Measure
// ----------------------------

// 1st Beat
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 2,
  length: 16,
  measure: 0,
  beat: 0
}))
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 3,
  length: 8,
  measure: 0,
  beat: 0
}))

// 2nd Beat
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 3,
  length: 8,
  measure: 0,
  beat: 8
}))

// 3rd Beat
my_piano.add(new SetMusic({
  chord: 'G',
  octave: 2,
  length: 16,
  measure: 0,
  beat: 16
}))
my_piano.add(new SetMusic({
  chord: 'G',
  octave: 3,
  length: 8,
  measure: 0,
  beat: 16
}))

// 4th Beat
my_piano.add(new SetMusic({
  chord: 'G',
  octave: 3,
  length: 8,
  measure: 0,
  beat: 24
}))


// ----------------------------
// 2nd Measure
// ----------------------------

// 1st Beat
my_piano.add(new SetMusic({
  chord: 'Am',
  octave: 2,
  length: 16,
  measure: 1,
  beat: 0
}))
my_piano.add(new SetMusic({
  chord: 'Am',
  octave: 3,
  length: 8,
  measure: 1,
  beat: 0
}))

// 2nd Beat
my_piano.add(new SetMusic({
  chord: 'Am',
  octave: 2,
  length: 8,
  measure: 1,
  beat: 8
}))
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 2,
  length: 8,
  measure: 1,
  beat: 12
}))
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 3,
  length: 8,
  measure: 1,
  beat: 12
}))

// 3rd Beat
my_piano.add(new SetMusic({
  chord: 'FM7',
  octave: 2,
  length: 16,
  measure: 1,
  beat: 16
}))
my_piano.add(new SetMusic({
  chord: 'FM7',
  octave: 3,
  length: 8,
  measure: 1,
  beat: 16
}))

// 4th Beat
my_piano.add(new SetMusic({
  chord: 'F6',
  octave: 2,
  length: 16,
  measure: 1,
  beat: 24
}))
my_piano.add(new SetMusic({
  chord: 'F6',
  octave: 3,
  length: 8,
  measure: 1,
  beat: 24
}))


// ----------------------------
// 3rd Measure
// ----------------------------

// 1st Beat
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 2,
  length: 16,
  measure: 2,
  beat: 0
}))
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 3,
  length: 8,
  measure: 2,
  beat: 0
}))

// 2nd Beat
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 3,
  length: 8,
  measure: 2,
  beat: 8
}))

// 3rd Beat
my_piano.add(new SetMusic({
  chord: 'G',
  octave: 2,
  length: 16,
  measure: 2,
  beat: 16
}))
my_piano.add(new SetMusic({
  chord: 'G',
  octave: 3,
  length: 8,
  measure: 2,
  beat: 16
}))

// 4th Beat
my_piano.add(new SetMusic({
  chord: 'G',
  octave: 3,
  length: 8,
  measure: 2,
  beat: 24
}))


// ----------------------------
// 4th Measure
// ----------------------------

// 1st Beat
my_piano.add(new SetMusic({
  chord: 'F',
  octave: 2,
  length: 16,
  measure: 3,
  beat: 0
}))
my_piano.add(new SetMusic({
  chord: 'F',
  octave: 3,
  length: 16,
  measure: 3,
  beat: 0
}))
my_piano.add(new SetMusic({
  chord: 'F',
  octave: 4,
  length: 16,
  measure: 3,
  beat: 0
}))

// 2nd Beat
my_piano.add(new SetMusic({
  chord: 'Em',
  octave: 2,
  length: 8,
  measure: 3,
  beat: 8
}))
my_piano.add(new SetMusic({
  chord: 'Em',
  octave: 3,
  length: 8,
  measure: 3,
  beat: 8
}))
my_piano.add(new SetMusic({
  chord: 'Dm7',
  octave: 2,
  length: 8,
  measure: 3,
  beat: 12
}))
my_piano.add(new SetMusic({
  chord: 'Dm7',
  octave: 3,
  length: 8,
  measure: 3,
  beat: 12
}))

// 3rd Beat
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 2,
  length: 16,
  measure: 3,
  beat: 16
}))
my_piano.add(new SetMusic({
  chord: 'C',
  octave: 3,
  length: 16,
  measure: 3,
  beat: 16
}))


// Setting
ongaq.add(my_piano)
