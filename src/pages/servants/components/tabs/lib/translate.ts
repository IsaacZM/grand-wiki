const fixes = (str: string): string => {
  str = str
    .replace(/tripas/gi, "Guts")
    .replace(/estrellas críticas/gi, "Estrellas de critico")
    .replace(/Carga su propio calibre NP./gi, "Carga su medidor de NP ")
    .replace(/resistencia rápida/gi, "Resistencia Quick")
    .replace(/(rápido|rápida|rápidos|rápidas)/gi, "Quick")
    .replace(
      /habilita daño adicional del NP de Taira no Kagekiyo/gi,
      "Daño adicional del NP de Taira no Kagekiyo"
    )
    .replace(/artístico/gi, "Arts")
    .replace(
      /Otorga la invencibilidad de un aliado durante 1 turno./gi,
      "Otorga invencibilidad a un aliado durante 1 turno."
    )
    .replace(
      /Aumenta el rendimiento del propio Buster/gi,
      'Aumentar la efectividad de las cartas <span color="red">Buster</span>'
    )
    .replace(/autodesventaja/gi, "Debuffs")
    .replace(/<Sobrecarga>/gi, "<b>Sobrecarga</b>")
    .replace("{{", '<span style="color: yellow; font-weight: 700">')
    .replace("}}", "</span>")
    .replace(/\n/g, "<br />");
  return str;
};

export const translate = async (
  str: string,
  name: string,
  n: number,
  svtId: number
): Promise<string> => {
  const requestTL = await fetch(
    "https://script.google.com/macros/s/AKfycbyhh7WD0TPV5P6a7k-6mNp9vFoOIfef1Rl4GKgqxbdqk1dJkbKneUHPtCn2a7xGEnE5hw/exec"
  );
  const responseTL = await requestTL.json();

  if (responseTL.data.length > 0) {
    const tlData = responseTL.data.filter(
      (tl) =>
        tl.Tipo === "Habilidad" &&
        tl.Name.toLowerCase() === name.toLowerCase() &&
        tl.ID === svtId &&
        tl.Numero === n
    );

    if (tlData.length > 0) return tlData[0].Traduccion.replace(/\n/g, "<br />");
  }

  const request = await fetch(
    "https://script.google.com/macros/s/AKfycbyJ44igikLTQi8bdLr2fahiZ0MiuXIUUgb1BYTRspRCnTJ1qv_nspi3xNDpxHtx8-m8/exec?text=" +
      window.btoa(str)
  );

  const response = await request.json();
  return fixes(response.texto);
};
