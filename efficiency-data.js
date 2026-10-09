// Source: efficiency_20260918.md, Section 1.2; NB-TF, R=2. FLOPs are analytical; storage is persistent payload MiB.
const efficiencyData = {
  "GDN": [
    {
      "length": "4K",
      "flops": 4.1859,
      "storage": 49.602
    },
    {
      "length": "16K",
      "flops": 0.9403,
      "storage": 49.903
    },
    {
      "length": "64K",
      "flops": 0.2465,
      "storage": 51.068
    },
    {
      "length": "256K",
      "flops": 0.0693,
      "storage": 55.75
    },
    {
      "length": "1M",
      "flops": 0.025,
      "storage": 74.486
    }
  ],
  "GDN-2": [
    {
      "length": "4K",
      "flops": 4.167,
      "storage": 19.277
    },
    {
      "length": "16K",
      "flops": 0.9335,
      "storage": 19.722
    },
    {
      "length": "64K",
      "flops": 0.2407,
      "storage": 21.492
    },
    {
      "length": "256K",
      "flops": 0.0658,
      "storage": 28.588
    },
    {
      "length": "1M",
      "flops": 0.0225,
      "storage": 56.985
    }
  ],
  "Mamba-2": [
    {
      "length": "4K",
      "flops": 4.489,
      "storage": 97.678
    },
    {
      "length": "16K",
      "flops": 1.0232,
      "storage": 97.835
    },
    {
      "length": "64K",
      "flops": 0.2528,
      "storage": 98.447
    },
    {
      "length": "256K",
      "flops": 0.0641,
      "storage": 100.913
    },
    {
      "length": "1M",
      "flops": 0.0171,
      "storage": 110.775
    }
  ]
};
