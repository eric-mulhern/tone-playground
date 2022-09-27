import { ReactElement, useEffect, useRef, useState } from "react";
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
  const itNeverWasAMinor = [100, 200, 300, 400, 500, 600, 700];

  const SIZE = 30;
  let columns: Array<ReactElement> = [];
  for (let i = 1; i <= SIZE; i++) {
    const row: any[] = [];
    for (let j = 1; j <= SIZE; j++) {
      row.push(
        <button
        disabled={!isLoaded}
        onClick={() => {
          playNote(i * j * 10, "8n", 1.5);
        }}
        onMouseOver={() => {
          playNote(i * j * 10, "8n", 1);
        }}
        key={i * j * 10 + i + j}
        className={styles.gridItem}
      >
        {i * j * 10}
      </button>
      );
    }
    columns.push(
      <div className="row">
        { row }
      </div>
      )
  }

  return (
    <div>
      <div className={styles.gridContainer}>
        { columns }
      </div>
    </div>
  );
};

export default Playground;
