

export function ProgressItemScale({ value, max }) {
    return (
      <div>
        <progress value={value} max={max} />
        <span>{`${(value / max) * 100}%`}</span>
      </div>
    );
  }