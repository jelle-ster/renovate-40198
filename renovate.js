module.exports = {
  extends: ["config:best-practices"],
  packageRules: [
    {
      description: "Only allow minor standard upgrades",
      matchUpdateTypes: ["major", "patch", "pin"],
      enabled: false,
    }
  ],
  prHourlyLimit: 10,
  platformAutomerge: true,
  rangeStrategy: "bump",
  dependencyDashboard: true,
  enabledManagers: ["npm", "nuget"], // not updating the bicep files for now.
};
