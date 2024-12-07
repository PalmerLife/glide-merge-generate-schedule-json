window.function = function (inputJSON) {
  // Parse the starting JSON
  const startingJSON = [
    {
      kind: "add-row-to-table",
      tableName: "native-table-GJibWrVsdDnW304S3LLx",
      columnValues: {
        vjxUn: "unknown",
        WKlsd: "MaZJlmkoernhrkbL",
        v4IGY: "unknown",
      },
    },
  ];

  // Parse the input JSON
  let parsedInputJSON;
  try {
    parsedInputJSON = JSON.parse(inputJSON.value);
  } catch (error) {
    throw new Error("Invalid input JSON string.");
  }

  // Merge logic
  const resultJSON = parsedInputJSON.map((item) => ({
    kind: "add-row-to-table",
    tableName: "native-table-GJibWrVsdDnW304S3LLx",
    columnValues: {
      vjxUn: item.vjxUn || "unknown",
      WKlsd: "MaZJlmkoernhrkbL",
      v4IGY: item.v4IGY || "unknown",
    },
  }));

  // Return the compacted JSON string
  return JSON.stringify(resultJSON);
};