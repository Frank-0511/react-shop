const aliases = (prefix = `src`) => ({
  "@containers": `${prefix}/containers`,
  "@components": `${prefix}/components`,
  "@routes": `${prefix}/routes`,
  "@pages": `${prefix}/pages`,
  "@hooks": `${prefix}/hooks`,
  "@styles": `${prefix}/styles`,
  "@context": `${prefix}/context`,
  "@icons": `${prefix}/assets/icons`,
  "@logos": `${prefix}/assets/logos`,
});

module.exports = aliases;
