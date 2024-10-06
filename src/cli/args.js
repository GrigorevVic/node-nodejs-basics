const parseArgs = () => {
  const args = process.argv;
  const res = [];

  for (let i = 2; i < args.length - 1; i += 2) {
    res.push(`${args[i].replace("--", "")} is ${args[i + 1]}`);
  }
  console.log(res.join(", "));
};

parseArgs();
