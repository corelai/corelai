#injected vars

export CORELAI_PrimeBffDb='corelai_prime'
export CORELAI_PrimeBffDbUser='prime_user'
export CORELAI_PrimeBffDbPassword='prime_password'
export CORELAI_Storage__PrimeBffDbConnectionString="Host=prime-bff-db;Port=5432;Database=${CORELAI_PrimeBffDb};Username=${CORELAI_PrimeBffDbUser};Password=${CORELAI_PrimeBffDbPassword}"
