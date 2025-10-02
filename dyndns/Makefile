VENV := .venv

PYTHON := poetry run python
TOUCH := $(PYTHON) -c 'import sys; from pathlib import Path; Path(sys.argv[1]).touch()'

poetry.lock: pyproject.toml
	poetry lock

# Build .venv with deps.
$(VENV): poetry.lock
	@echo Building Python virtualenv
	@$(PYTHON) -m venv $@
	@echo Installing Poetry environment
	@poetry install
	@$(TOUCH) $@

# Convenience target to build venv
.PHONY: setup
setup: $(VENV)

.PHONY: check
check: $(VENV)
	@echo Checking Poetry lock: Running poetry check --lock
	@poetry check --lock
	@echo Linting code: Running pre-commit
	@poetry run ruff check .

.PHONY: test
test: $(VENV)
	@echo Testing code: Running pytest
	@poetry run pytest

.PHONY: coverage
coverage:

.DEFAULT_GOAL := test
