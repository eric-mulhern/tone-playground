import { useEffect, useRef, useState } from "react";
import * as tone from "tone";
import { Tone } from "tone/build/esm/core/Tone";
import { Frequency, Time } from "tone/build/esm/core/type/Units";
import styles from '../styles/Playground.module.css'

const Playground = () => {
  const [isLoaded, setLoaded] = useState(false);
  const synth: any = useRef<Tone>(null);

  useEffect(() => {
    setLoaded(true);
    synth.current = new tone.Synth().toDestination();
  }, []);

  // const handleClick = () => synth.current?.triggerAttackRelease("C4", "8n");

  const playNote = (note: Frequency, duration: Time, octave: number) => {
      note = typeof note === 'number' ? note * 2 ** octave: `${note}${octave}`;
      synth.current?.triggerAttackRelease(note, duration);
    }

  const cMajor = ["C", "D", "E", "F", "G", "A", "B"];
  const aMinor = [100, 200, 300, 400, 500, 600, 700];

  return (
    <div>
      <div> {
        cMajor.map((note, i) => (
          <button
            disabled={!isLoaded}
            onClick={() => {
              playNote(note, "8n", 4);
            }}
            onMouseOver={() => {
              playNote(note, "8n", 3);
            }}
            key={note + i}
            className={styles.keyboardNote}
          >
            {note}
          </button>
        ))
      } </div>
      <div> {
        aMinor.map((note, i) => (
          <button
            disabled={!isLoaded}
            onClick={() => {
              playNote(note, "8n", 3);
            }}
            onMouseOver={() => {
              playNote(note, "8n", 2);
            }}
            key={note + i}
            className={styles.keyboardNote}
          >
            {note}
          </button>
        ))
      } </div>
    </div>
  );
};

export default Playground;
