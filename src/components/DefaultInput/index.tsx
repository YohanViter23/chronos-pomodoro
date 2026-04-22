type DefaultInputProps = {
  type: 'text' | 'number' | 'search';
};

export function DefaultInput({ type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor='meuInput'>task</label>
      <input id='meuInput' type={type} />
    </>
  );
}
