export const html = {
  minimify: (source: string) => {
    source = source.replaceAll(">\r\n", ">");
    source = source.replaceAll(/(?<=\>) +(?=\<)/gm, "");
    return source;
  }
}