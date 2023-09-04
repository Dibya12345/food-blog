const data = [
  {
    id: 1,
    image_url:
      "https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1694995200&Signature=jTXxIaZmTVZkpGwUCeIOAuT6Iyl-jdEHcJRxUK7F1egAnu7BAgzshEozwB~mMOjwssj5BlVZLuO5hYyoiTLED9Ff5pUOWcMRbk8XIVCkN1VvWa1xu8B0PUkrqv8My7JJY1GPih4cUqcLBWP2TiYdqmIbiADFBidqksq0WzVuyWWWxdPUczN7JrybW854Xm5ffHUlV5LBM6UDRgL07e7AoTa3grsZvZWWBGsaTmmxoWTNLFtPaxRF-dojzpJ5pv~4fBh9sCY0cwrCOJ1z7robVUL9l4nSPIKHSzwLtC89Ar8Bkw7e4kEpU9Y6MR4LQ0x64lHPZw86TyQXcvqalwDsIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    image_name: "Grilled Tomatoes at Home",
  },
  {
    id: 2,
    image_url:
      "https://s3-alpha-sig.figma.com/img/c6dd/5c3b/71e2cd1709116400deb9af41ed9aa012?Expires=1694995200&Signature=aowl72TKbsgfgyXYrD0Q8q8uWpdSHm-Fwe1QWxtU~MAvb4arbATmpTm4JcTBXZ4U6uaGlaIRTtvLdaYsRkXJ5nRwXjQFIdnncEQ3HT7FuG88JlSQKpnzVa7a~Ir7JKxDnBzX0QDkhIehTcFqmsa18ou3ePkeHAfT3I6N3suFMAFR7gjSHR5DzM0RUHOUEUgbr4fFPbHlJPEmLqobFljOQW74MD8Ahbk3Q6As2jOJYN0PjhKnOYbPAAuqniPTekNVmU2Gq7jh5EttVC8Jh5TzgURs4MfbpWbGNv7jUVT0ZBclQSqtZpkM0Eppn3mDL6TWm2x8lxufH5pJ0RkLC8gtbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    image_name: "Snacks for Travel",
  },
  {
    id: 3,
    image_url:
      "https://s3-alpha-sig.figma.com/img/01b6/596f/5a4907f80afeb54b1849b81ebf1eb5f2?Expires=1694995200&Signature=fplh3HNpDgsN2tSVeq2GK7MGxGqrtYia6FY4Ftt6zfuuNNcV7CaI1lSO04Jr9~ZhrCQzhL3AHXhuIx9YVSmgYzjYDHHY6O5ASk1vwkKbr7pUrXqr2VYBrOG~Eh5Nus5dPsiUBHknyIrDxCPahNcXecWz91wvgl79kFnt0Rce5m-7v2bJzXS38tpp4XFGG8VRNwCkjCxEM5EgauF-6g8aHTvG7kWsuK07iLjiDSMrRwxu8RWwPb9xfc5Tv26AhAm9ZSEwMuoc-8kA9vqKBdJdGpTeOUHu4rjptq7XEoK7ybmlZu4FfsYqlla5YnxWxbBVFU93eoVnCldLcuk6pBwlBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    image_name: "Post-workout Recipes",
  },
  {
    id: 4,
    image_url:
      "https://s3-alpha-sig.figma.com/img/b457/cb75/2678ff07019c289fb72556852cc6b74f?Expires=1694995200&Signature=UGVT4KR8UD8sfrgGhwMok2bhGN0x98wiuZA-rGI34ew5ojX7fwcLr-AkhPc-J~cDaoXO5oJkYp5ojsJh-0vD~JgfjTdb49qq9kxm19yH~Hfi4IyU8ms5XpgHHIyUE3LrTH4U827Are2nXh9BB50S5Gt5KHF5tUesn68AYGb8TSPpqWtgAoMMzVFboYSJf3cH7V6A--x-LWD2JVrbwsKfNxOATEkn9io96k0dhhpSDRzpvtv6Dm8~jNoHcz-JShdiT7MTlwaMAFUEn1yLCGevDlD75lFmQPZptxgrue7Ibcb-SJRyNIB~tl9-euOes9kfYD2KnDfkJ8uAVuSPjvaU~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    image_name: "How To Grill Corn",
  },
  {
    id: 5,
    image_url:
      "https://s3-alpha-sig.figma.com/img/36f0/05b2/98fb3af9a51a3627a968ca95735063e2?Expires=1694995200&Signature=cC1cbtKUwoi7CvIe1A3r~dWbPrIATl~wKjIfrh96~KZM0loH3~C4BeCVpJD7TsQMfSt69g3NbLPg4fvSpD6iICPdI5EBruIBVX-KeiDqCBi9l05uYDZG0ep9Y6V8R8aJmBiPS8z2dUDBh3mf8XpOq~7fA8MqHceM0Zf9MTgKEqqS6Ds-yX8KnKRSoyxx2WDdGMLZKgXoSoq9XT7TDMCjSlKXNBASD9A0k7AGCP8TocmjKyifgLDS0LTjtkcR3fRrFdoASQoSUsX1A5pR4J0f996t28D-jjeYm1j7cY5qXtPK3Zz3pnS1mJ1I9XfkNZOO1HJZmFqPSmlZxZTTpVT7rQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    image_name: "Crunchwrap Supreme",
  },
  {
    id: 6,
    image_url:
      "https://s3-alpha-sig.figma.com/img/60f8/cba1/6ae830e61504aecaf6d8b547eb08589a?Expires=1694995200&Signature=U6uNHhvF33i9RPixHMyOO-LzKPtHflAKY59852sHF2bDkfQkjJr8HrbrGAThi77TEBo5FYV83kmXWlDW96To8iRHBxh7wuUizEyakstD2vNBRGUd2VQSM7EjdVJEW0V5B0xa1DU~NkTiSTdqkpzU9WcJ-vaK479-j7NAY3aYKwfrQaBxU7h37YKkuk8OBHj~F4ZYLSKFoA0h00VG5whh3Xgv4KwyQUhLgPcrqAKZmRuR4Ntcy0869jdxnKRVlIaoIZIpYX-uSn-iD1crMkTCVSaLuTo3t5hgFEoJ-xO~pTeOI87mzPG3OqhgnaqK7byrnav77i2mGSmJB9RUOrNzow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    image_name: "Broccoli Cheese Soup",
  },
];

export default data;
