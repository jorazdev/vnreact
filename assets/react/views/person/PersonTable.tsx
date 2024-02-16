
const PersonTable = () => {

    return(
        <div>
            <span className="text-3xl font-bold">
                 Hello world! Table person
            </span>
            <table className="border-collapse border border-slate-400">
  <caption className="caption-top">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>
  <thead>
    <tr>
      <th className="border border-slate-300">Wrestler</th>
      <th className="border border-slate-300">Signature Move(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-300">"Stone Cold" Steve Austin</td>
      <td className="border border-slate-300">Stone Cold Stunner, Lou Thesz Press</td>
    </tr>
    <tr>
      <td className="border border-slate-300">Bret "The Hitman" Hart</td>
      <td className="border border-slate-300">The Sharpshooter</td>
    </tr>
    <tr>
      <td className="border border-slate-300">Razor Ramon</td>
      <td className="border border-slate-300">Razor's Edge, Fallaway Slam</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default PersonTable