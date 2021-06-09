/* eslint-disable import/prefer-default-export */
function createUri(DB_TABLE: string): string {
  const uri: string = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_URL}/${DB_TABLE}?retryWrites=true&w=majority`;

  return uri;
}

export { createUri };
