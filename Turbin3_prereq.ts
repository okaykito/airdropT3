export type Turbin3Prereq = {
  version: "0.1.0";
  name: "Turbin3_prereq";
  address: "TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM";
  metadata: {
	name: "q3_pre_reqs_rs";
	version: "0.1.0";
	spec: "0.1.0";
	description: "Created with Anchor";
  };
  instructions: Array<{
	name: string;
	discriminator: any[];
	accounts: any[];
	args: any[];
  }>;
};

export const IDL: Turbin3Prereq = {
  version: "0.1.0",
  name: "Turbin3_prereq",
  address: "TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM",
  metadata: {
	name: "q3_pre_reqs_rs",
	version: "0.1.0",
	spec: "0.1.0",
	description: "Created with Anchor"
  },
  instructions: [
	// Fill in the actual instruction objects here
	// Example:
	// {
	//   name: "create_collection",
	//   discriminator: [...],
	//   accounts: [...],
	//   args: []
	// }
  ]
};
////export const IDL = {

//  version: "0.1.0",
//  name: "turbin3_prereq",
//  instructions: [
//    {
//      name: "initialize",
//      accounts: [
//        { name: "user", isMut: true, isSigner: true },
//        { name: "account", isMut: true, isSigner: false },
//        { name: "systemProgram", isMut: false, isSigner: false },
//      ],
//      args: [
//        { name: "githubUsername", type: "string" }
//      ]
//    }
//  ]
//};
