CREATE TABLE users(
id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
name VARCHAR(100),
email VARCHAR(255) UNIQUE NOT NULL,
password TEXT NOT NULL,
created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE transactions(
id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
wallet_id UUID REFERENCES wallets(id),
type VARCHAR(20) NOT NULL,
amount NUMERIC(15,2) NOT NULL,
status VARCHAR(20) DEFAULT 'SUCCESS',
reference_id VARCHAR(255) UNIQUE,
created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE webhooks(
id UUID PRIMARY KEY DEFAULT gen_random-uuid(),
webhook_id VARCHAR(255) UNIQUE NOT NULL,
payload JSONB,
processed_at TIMESTAMP DEFAULT NOW()
);