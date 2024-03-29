module.exports =
	{
		tabWidth: 2,
		singleQuote: true,
		semi: false,
		trailingComma:
			'all',
		arrowParens:
			'always',
		overrides:
			[
				{
					files:
						'*.{js,jsx,tsx,ts,scss,json,html}',
					options:
						{
							tabWidth: 2,
						},
				},
			],
	}
