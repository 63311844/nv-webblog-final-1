module.exports = ( sequelize, DataTypes ) => {
    const Blog = sequelize.define('Prak', {
        title: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        pictures: DataTypes.STRING,
        content: DataTypes.TEXT,
        category: DataTypes.STRING,
        status: DataTypes.STRING,
    })
    return Blog
}